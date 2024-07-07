    <script>
        // Function to add new options to dropdown
        function addNewOption(selectId, textBoxId) {
            var select = document.getElementById(selectId);
            var textBox = document.getElementById(textBoxId);
            var newOption = textBox.value;

            // Create a new option element
            var option = document.createElement("option");
            option.text = newOption;
            option.value = newOption;

            select.add(option);

            // Clear the textbox
            textBox.value = "";
        }

        // Function to update the story with user input
        function updateStory() {
            var species = document.getElementById("speciesSelect").value;
			var waterCraft = document.getElementById("waterCraftSelect").value;
			var weather = document.getElementById("weatherSelect").value;
			var action = document.getElementById("actionSelect").value;
			var outcome = document.getElementById("outcomeSelect").value;

            // Update the story with user input
            document.getElementById("speciesSpan").innerText = species;
			document.getElementById("waterCraftSpan").innerText = waterCraft;
			document.getElementById("weatherSpan").innerText = weather;
			document.getElementById("actionSpan").innerText = action;
			document.getElementById("outcomeSpan").innerText = outcome;

        }
    </script>