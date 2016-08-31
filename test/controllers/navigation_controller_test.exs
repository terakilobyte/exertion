defmodule Exertion.NavigationControllerTest do
  use Exertion.ConnCase

  alias Exertion.Navigation
  @valid_attrs %{}
  @invalid_attrs %{}

  test "lists all entries on index", %{conn: conn} do
    conn = get conn, navigation_path(conn, :index)
    assert html_response(conn, 200) =~ "Listing navigation"
  end

  test "renders form for new resources", %{conn: conn} do
    conn = get conn, navigation_path(conn, :new)
    assert html_response(conn, 200) =~ "New navigation"
  end

  test "creates resource and redirects when data is valid", %{conn: conn} do
    conn = post conn, navigation_path(conn, :create), navigation: @valid_attrs
    assert redirected_to(conn) == navigation_path(conn, :index)
    assert Repo.get_by(Navigation, @valid_attrs)
  end

  test "does not create resource and renders errors when data is invalid", %{conn: conn} do
    conn = post conn, navigation_path(conn, :create), navigation: @invalid_attrs
    assert html_response(conn, 200) =~ "New navigation"
  end

  test "shows chosen resource", %{conn: conn} do
    navigation = Repo.insert! %Navigation{}
    conn = get conn, navigation_path(conn, :show, navigation)
    assert html_response(conn, 200) =~ "Show navigation"
  end

  test "renders page not found when id is nonexistent", %{conn: conn} do
    assert_error_sent 404, fn ->
      get conn, navigation_path(conn, :show, -1)
    end
  end

  test "renders form for editing chosen resource", %{conn: conn} do
    navigation = Repo.insert! %Navigation{}
    conn = get conn, navigation_path(conn, :edit, navigation)
    assert html_response(conn, 200) =~ "Edit navigation"
  end

  test "updates chosen resource and redirects when data is valid", %{conn: conn} do
    navigation = Repo.insert! %Navigation{}
    conn = put conn, navigation_path(conn, :update, navigation), navigation: @valid_attrs
    assert redirected_to(conn) == navigation_path(conn, :show, navigation)
    assert Repo.get_by(Navigation, @valid_attrs)
  end

  test "does not update chosen resource and renders errors when data is invalid", %{conn: conn} do
    navigation = Repo.insert! %Navigation{}
    conn = put conn, navigation_path(conn, :update, navigation), navigation: @invalid_attrs
    assert html_response(conn, 200) =~ "Edit navigation"
  end

  test "deletes chosen resource", %{conn: conn} do
    navigation = Repo.insert! %Navigation{}
    conn = delete conn, navigation_path(conn, :delete, navigation)
    assert redirected_to(conn) == navigation_path(conn, :index)
    refute Repo.get(Navigation, navigation.id)
  end
end
