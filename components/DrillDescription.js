import { View, Image } from 'react-native'
import { Text, Button } from 'react-native-paper'

const DrillDescription = () => {

    const startDrill = () => {
        
    }

    return (
        <View style={{ margin: 10 }}>
            <Text style={{ paddingBottom: 10 }} variant="headlineLarge">Description</Text>
            <Text variant="bodySmall">Qui laborum anim in in consectetur commodo ad minim. Incididunt cillum ex magna id pariatur nisi id cupidatat Lorem Lorem anim incididunt mollit. Qui consectetur magna fugiat enim. Labore cillum eiusmod do qui et deserunt laborum fugiat officia ut. Culpa officia ad ipsum est velit do officia commodo dolor qui nulla ut. Sunt minim cupidatat sunt mollit eu ullamco ea irure eiusmod minim dolore ea duis.</Text>
            <Image source={require('../assets/drill-description-image.jpg')} style={{ width: "100%", maxHeight: 200, marginTop: 50 }} />
            <Button mode="contained" buttonColor="#F24E1E" textColor="white" onPress={() => {startDrill} }>Start Drill</Button>
        </View>
    )
}

export default DrillDescription;