import {app} from '@app/contexts';
import {onAddressBookCreate} from '@app/event-actions/on-address-book-create';
import {onAddressBookSync} from '@app/event-actions/on-address-book-sync';
import {onAppActive} from '@app/event-actions/on-app-active';
import {onAppLoggedIn} from '@app/event-actions/on-app-logged-in';
import {onAppMnemonicBackup} from '@app/event-actions/on-app-mnemonic-backup';
import {onAppProviderSssBackup} from '@app/event-actions/on-app-provider-sss-backup';
import {onAppStarted} from '@app/event-actions/on-app-started';
import {onDeepLink} from '@app/event-actions/on-deep-link';
import {onDynamicLink} from '@app/event-actions/on-dynamic-link';
import {onPushNotification} from '@app/event-actions/on-push-notification';
import {onStakingSync} from '@app/event-actions/on-staking-sync';
import {onTransactionCheck} from '@app/event-actions/on-transaction-check';
import {onTransactionCreate} from '@app/event-actions/on-transaction-create';
import {onTransactionsLoad} from '@app/event-actions/on-transactions-load';
import {onWalletConnectApproveConnection} from '@app/event-actions/on-wallet-connect-approve-connection';
import {onWalletConnectSignTransaction} from '@app/event-actions/on-wallet-connect-sign-transaction';
import {onWalletConnectUri} from '@app/event-actions/on-wallet-connect-uri';
import {onWalletCreate} from '@app/event-actions/on-wallet-create';
import {onWalletMnemonicCheck} from '@app/event-actions/on-wallet-mnemonic-check';
import {onWalletMnemonicSaved} from '@app/event-actions/on-wallet-mnemonic-saved';
import {onWalletRemove} from '@app/event-actions/on-wallet-remove';
import {onWalletReset} from '@app/event-actions/on-wallet-reset';
import {onWalletSssCheck} from '@app/event-actions/on-wallet-sss-check';
import {onWalletSssSaved} from '@app/event-actions/on-wallet-sss-saved';
import {onWalletsBalanceCheck} from '@app/event-actions/on-wallets-balance-check';
import {Events} from '@app/events';
import {callbackWrapper, throttle} from '@app/utils';

app.on(
  Events.onWalletsBalanceCheck,
  throttle(callbackWrapper(onWalletsBalanceCheck), 1000),
);
app.on(Events.onDeepLink, onDeepLink);
app.on(Events.onWalletCreate, callbackWrapper(onWalletCreate));
app.on(Events.onWalletRemove, callbackWrapper(onWalletRemove));
app.on(Events.onStakingSync, throttle(onStakingSync, 1000));
app.on(Events.onTransactionsLoad, callbackWrapper(onTransactionsLoad));
app.on(Events.onAppActive, callbackWrapper(onAppActive));
app.on(Events.onAppStarted, callbackWrapper(onAppStarted));
app.on(Events.onAppLoggedId, callbackWrapper(onAppLoggedIn));
app.on(Events.onAppMnemonicBackup, onAppMnemonicBackup);
app.on(Events.onWalletReset, onWalletReset);
app.on(Events.onWalletMnemonicCheck, onWalletMnemonicCheck);
app.on(Events.onWalletMnemonicSaved, onWalletMnemonicSaved);
app.on(Events.onWalletSssCheck, onWalletSssCheck);
app.on(Events.onWalletSssSaved, onWalletSssSaved);
app.on(Events.onWalletConnectUri, onWalletConnectUri);
app.on(
  Events.onWalletConnectApproveConnection,
  onWalletConnectApproveConnection,
);
app.on(Events.onAppProviderSssBackup, onAppProviderSssBackup);
app.on(Events.onWalletConnectSignTransaction, onWalletConnectSignTransaction);
app.on(Events.onDynamicLink, onDynamicLink);
app.on(Events.onTransactionCheck, onTransactionCheck);
app.on(Events.onPushNotification, callbackWrapper(onPushNotification));
app.on(Events.onAddressBookCreate, callbackWrapper(onAddressBookCreate));
app.on(Events.onTransactionCreate, callbackWrapper(onTransactionCreate));
app.on(Events.onAddressBookSync, callbackWrapper(onAddressBookSync));
