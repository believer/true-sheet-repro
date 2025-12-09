import { TrueSheet } from "@lodev09/react-native-true-sheet";
import { Button, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

function App() {
	return (
		<SafeAreaProvider>
			<SafeAreaView>
				<Button
					onPress={async () => {
						await TrueSheet.present("inside");
					}}
					title="Open sheet inside view"
				/>
				<Button
					onPress={async () => {
						await TrueSheet.present("outside");
					}}
					title="Open sheet outside view"
				/>
				<View>
					<TrueSheet name="inside" backgroundColor="red">
						<Text>HELLO</Text>
					</TrueSheet>
				</View>
				<TrueSheet name="outside" backgroundColor="green">
					<Text>HELLO</Text>
				</TrueSheet>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}

export default App;
