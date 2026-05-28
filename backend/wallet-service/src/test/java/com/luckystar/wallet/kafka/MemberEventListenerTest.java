package com.luckystar.wallet.kafka;

import com.luckystar.wallet.service.WalletService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.kafka.support.Acknowledgment;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class MemberEventListenerTest {

    @Mock
    WalletService walletService;

    @InjectMocks
    MemberEventListener listener;

    @Test
    void handleMemberRegistered_validMessage_callsCreateWalletAndAcks() {
        Acknowledgment ack = mock(Acknowledgment.class);

        listener.handleMemberRegistered("42", ack);

        verify(walletService, times(1)).createWallet(42L);
        verify(ack, times(1)).acknowledge();
    }

    @Test
    void handleMemberRegistered_invalidMessage_acksWithoutCallingService() {
        Acknowledgment ack = mock(Acknowledgment.class);

        listener.handleMemberRegistered("not-a-number", ack);

        verify(walletService, never()).createWallet(any());
        verify(ack, times(1)).acknowledge();
    }
}
