defmodule Exertion.CounterChannel do
  use Exertion.Web, :channel

  def join("counter", _params, socket) do
    send(self, :after_join)
    {:ok, socket}
  end

  def handle_info(:after_join, socket) do
    push(socket, "init", Exertion.Counter.state())
    {:noreply, socket}
  end

  def handle_info(%{event: event}, socket) do
    push(socket, event, %{})
    {:noreply, socket}
  end

  def handle_in(event, _, socket) when event in ["add", "sub"] do
    case event do
      "add" ->
        Exertion.Counter.add()
      "sub" ->
        Exertion.Counter.sub()
      _ ->
        IO.puts "some shit went down"
    end
    {:noreply, socket}
  end
end
