package com.luckystar.wallet.kafka;

import com.luckystar.wallet.service.WalletService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.support.Acknowledgment;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class MemberEventListener {

    private final WalletService walletService;

    @KafkaListener(topics = "member.registered", groupId = "wallet-service-group")
    public void handleMemberRegistered(String message, Acknowledgment ack) {
        log.info("Received member.registered event: {}", message);

        long playerId;
        try {
            playerId = Long.parseLong(message.trim());
        } catch (NumberFormatException e) {
            log.error("Invalid playerId in member.registered event: {}", message);
            ack.acknowledge();
            return;
        }

        try {
            walletService.createWallet(playerId);
        } catch (Exception e) {
            log.error("Unexpected error handling member.registered for playerId={}", playerId, e);
        }

        ack.acknowledge();
    }
}
