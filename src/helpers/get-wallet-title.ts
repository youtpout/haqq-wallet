import {RouteProp} from '@react-navigation/core/lib/typescript/src/types';
import {StackNavigationOptions} from '@react-navigation/stack';

import {PopupHeader} from '@app/components';
import {DismissPopupButton} from '@app/components/popup/dismiss-popup-button';
import {SpacerPopupButton} from '@app/components/popup/spacer-popup-button';
import {Wallet} from '@app/models/wallet';
import {RootStackParamList, StackPresentationTypes} from '@app/types';

export function getWalletTitle(props: {
  route: RouteProp<RootStackParamList, 'accountInfo'>;
  navigation: any;
}): StackNavigationOptions {
  const wallet = Wallet.getById(props.route.params.accountId);

  return {
    title: wallet?.name || 'Account',
    headerShown: true,
    header: PopupHeader,
    headerLeft: SpacerPopupButton,
    headerRight: DismissPopupButton,
    presentation: 'modal' as StackPresentationTypes,
  };
}
