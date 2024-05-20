# Probability Predictor

Welcome to the Probability Predictor project! This interactive web application allows users to calculate the probability of at least one success based on given percentage or chance values over a specified number of tries.

## Features

- **Interactive Form**: Users can input a percentage or chance value and the number of tries to calculate the probability of at least one success.
- **Responsive Design**: The application adjusts to different screen sizes for optimal viewing.
- **Error Handling**: Provides error messages for invalid inputs.

## How to Use

1. **Clone the repository**:
    ```sh
    git clone https://github.com/your-username/probability-predictor.git
    cd probability-predictor
    ```

2. **Start a local server**: You can start a simple HTTP server using Python by running:
    ```sh
    python -m http.server 8080
    ```

3. **Open the application**: Navigate to `http://localhost:8080/index.html` in your web browser.

4. **Calculate Probability**:
    - Select either "Percentage" or "Chance" from the dropdown menu.
    - Enter the percentage or chance value in the text input.
    - Enter the number of tries in the number input.
    - Click the "Calculate" button to see the result.

## File Structure

- `index.html`: The main HTML file that sets up the structure of the web page.
- `style.css`: The CSS file that styles the web page.
- `sandbox.js`: The JavaScript file that contains the logic for calculating probabilities and handling user interactions.

## Improvements

- **Add More Calculations**: Extend the functionality to calculate different types of probabilities.
- **Enhanced Error Handling**: Improve error handling to provide more specific feedback.
- **Browser Compatibility**: This application works best in Google Chrome. Some features may not work correctly in other browsers like Edge.
- **Mobile Responsiveness**: Adjust the layout for better viewing on mobile devices.
- **Dynamic Data Loading**: Load data dynamically from a server or a database to make the application more versatile.

## Contributions

Contributions are welcome! If you find any bugs or have suggestions for improvements, feel free to open an issue or create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

This project was developed as a simple tool to help visualize probabilities. Special thanks to all contributors and users for their support.

## Example

Here's an example of how to use the Probability Predictor:

1. Select "Percentage" from the dropdown.
2. Enter `50` in the "Percentage" input field.
3. Enter `10` in the "Tries" input field.
4. Click "Calculate" to see the result: "Success in 10 tries is 99.90%."

Enjoy using the Probability Predictor!
