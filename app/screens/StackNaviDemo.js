import { Button } from 'react-native/types';
import StackNavigator from 'react-navigation';
//Just the Demo
export const Demostack = StackNavigator({
    FirstScreen: {
        screen: FirstScreen,
        navigationOption: {
            //title:'first screen title',
            title: ({ state }) => state.params.firstname,
            header: { props } = ({
                left: <Button />,
            })
        },
    },
    SecondScreen: {
        screen: SecondScreen,
    }
})