require 'twitter'

$twitter = Twitter::REST::Client.new do |config|
  config.consumer_key = 'T61WYIshVpg8AEoNcDDRnLbnO '
  config.consumer_secret = 'en9sZgeKihcFGIhHii84cRM8DszYwR536Ps7HLK047N0aOIIDW'
  config.access_token = '2224078765-QauadLtzpzI6u3Oz88sr4d9ku8pLKVHaERsBitw'
  config.access_token_secret = '6JDoFq7rXxGHR8klc8Mg1KI8YXrTxjHm9twP0GSjDIWK5'
end