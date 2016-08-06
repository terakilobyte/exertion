defmodule Exertion.NavigationController do
  use Exertion.Web, :controller

  alias Exertion.Navigation

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
