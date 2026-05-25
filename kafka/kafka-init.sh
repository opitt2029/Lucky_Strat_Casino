#!/bin/bash

set -euo pipefail

echo "Creating Kafka topics..."

topics=(
  "member.registered"
  "wallet.debit"
  "wallet.credit"
  "game.result"
  "rank.update"
  "notification.push"
)

for topic in "${topics[@]}"; do
  kafka-topics --create \
    --if-not-exists \
    --bootstrap-server lucky-star-kafka:29092 \
    --replication-factor 1 \
    --partitions 3 \
    --topic "${topic}"
done

echo "Kafka topics created."
