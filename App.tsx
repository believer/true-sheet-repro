import { TrueSheet } from "@lodev09/react-native-true-sheet";
import { Button, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

function App() {
	return (
		<SafeAreaProvider>
			<SafeAreaView>
				<Button
					onPress={async () => {
						await TrueSheet.present("sheet");
					}}
					title="Open sheet"
				/>
				<View>
					<TrueSheet name="sheet" backgroundColor="red">
						<Text>HELLO</Text>
					</TrueSheet>
				</View>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}

export default App;
