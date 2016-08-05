# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :exertion,
  ecto_repos: [Exertion.Repo]

# Configures the endpoint
config :exertion, Exertion.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "s+TIacQZ9Jg027uPpG88Myw+v2Hb9crxnh2Bq7OLF/XRChnncDmfwY1+y9O8ovHw",
  render_errors: [view: Exertion.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Exertion.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
