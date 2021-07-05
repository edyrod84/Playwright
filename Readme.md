
# Validar formulario “Get in touch”,
* Dentro de la web de December Labs, navegar hasta el form, completar el mismo
con los datos detallados a continuación y enviar formulario. Validar que el
formulario se envió con éxito. Los datos a utilizar para completar el form son los
siguientes:
  - Name, Company & Message = "Test"
  - Email = "test@*********.com"

* Dentro de la web de December Labs, navegar hasta el form, no completar
ningún campo y enviar formulario. Validar que se visualizan mensajes de error
indicando los campos obligatorios.

## Tests
* To validate the form `Get in Touch` created 2 tests.
### Test 1
1. Test Navigates to The Home page of Decemberlabs
1. Once in page opens menu and clicks in Get in Touch button
1. Once in the Form it enters the values defined above and presses send
1. Test asserts user receives this message "Thanks for reaching out!, We’ll be in touch shortly.".

### Test 2
1. Test Navigates to The Home page of Decemberlabs
1. Once in page opens menu and clicks in Get in Touch button
1. Once in the Form it enters the empty values for name and email and presses send
1. Test validates fiels are requiered by checking if the selector that highlights the field's border in red exists  and throwing and error with the fields label name.
1. Then Asserts those fields are the ones expected with errors

## Set Up
If zip file: 
1. Decompress the file.
1. Open Terminal or cmd prompt in windows
1. Run `cd pathToFolder`
1. Once in the folder Run `npm install`.

This will install the necessary dependencies

## To Run Test
Once dependencies are installed
1. In the root folder of the project run `npx playwright test` this will run all tests.
1. Tor Run single test run `npx playwright test tests/get_in_touch.spec.js`, this will run that test file.
1. Tests by default run headless, to run them headed `npx playwright test --headed`.
1. Also tests run in parallel by default, to run 1 by one `npx playwright test --workers=1`.


