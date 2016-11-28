defmodule Exertion.Counter do

  use GenServer

  @initial_state 0

  def start_link() do
    GenServer.start_link(__MODULE__, [], name: __MODULE__)
  end

  def add, do: GenServer.call(__MODULE__, :add)
  def sub, do: GenServer.call(__MODULE__, :sub)
  def state, do: GenServer.call(__MODULE__, :state)

  def init(_args) do
    {:ok, @initial_state}
  end

  def handle_call(:add, _, state) do
    new_state = state + 1
    {:reply, {:ok, new_state}, new_state}
  end

  def handle_call(:sub, _, state) do
    new_state = state - 1
    {:reply, {:ok, new_state}, new_state}
  end

  def handle_call(:state, _, state) do
    {:reply, state, state}
  end
end
