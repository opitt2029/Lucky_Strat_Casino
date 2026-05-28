package com.luckystar.wallet.service;

import com.luckystar.wallet.dto.WalletBalanceResponse;
import com.luckystar.wallet.exception.WalletNotFoundException;
import com.luckystar.wallet.postgres.entity.Wallet;
import com.luckystar.wallet.postgres.repository.WalletRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
public class WalletService {

    private final WalletRepository walletRepository;

    @Transactional(readOnly = true)
    public WalletBalanceResponse getBalance(Long playerId) {
        Wallet wallet = walletRepository.findById(playerId)
                .orElseThrow(() -> new WalletNotFoundException("Wallet not found for player: " + playerId));

        long availableBalance = wallet.getBalance() - wallet.getFrozenAmount();
        return new WalletBalanceResponse(wallet.getBalance(), wallet.getFrozenAmount(), availableBalance);
    }

    @Transactional
    public void createWallet(Long playerId) {
        if (walletRepository.existsById(playerId)) {
            log.warn("Wallet already exists for playerId={}, skipping creation", playerId);
            return;
        }
        Wallet wallet = Wallet.builder()
                .playerId(playerId)
                .balance(0L)
                .frozenAmount(0L)
                .version(0L)
                .build();
        try {
            walletRepository.save(wallet);
            log.info("Wallet created for playerId={}", playerId);
        } catch (DataIntegrityViolationException e) {
            log.warn("Concurrent wallet creation detected for playerId={}, ignoring", playerId);
        }
    }
}
