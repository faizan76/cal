// Create a new form element
const coilForm = document.createElement("form");
coilForm.classList.add(`styleme`);
// Populate form with an input and a button
coilForm.innerHTML = `
<input type="number" min="0" step="any" name="size" placeholder="Enter Size">
<input type="number" min="0" step="any" name="wires" placeholder="Enter Wires">
<input type="number" min="0" step="any" name="coilWeight" placeholder="Coil Weight">
<input type="number" min="0" step="any" name="pvcPrice" placeholder="PVC Price Per KG">
<input type="number" min="0" step="any" name="copperPrice" placeholder="Copper Price Per KG">
<input type="number" min="0" step="any" name="labor" placeholder="Enter Labor">
<input type="number" min="0" step="any" name="packing" placeholder="Enter Packing">

<button>Update</button>
`;
// Add event listener to the form submit action
coilForm.addEventListener("submit", (e) => {
    // Stop form from reloading the page
    e.preventDefault();

    // Get the value from the form input
    let size = coilForm.querySelector('input[name="size"]').value;
    let wires = coilForm.querySelector('input[name="wires"]').value;
    size = size * size;
    let copper = size / 80000 * 33 * wires;
    let coilWeight = coilForm.querySelector('input[name="coilWeight"]').value;
    let pvcPrice = coilForm.querySelector('input[name="pvcPrice"]').value;
    let pvcWeight = coilWeight - copper;
    let pvcTotal = pvcWeight * pvcPrice;
    let copperPrice = coilForm.querySelector('input[name="copperPrice"]').value;
    let labor = coilForm.querySelector('input[name="labor"]').value;
    let packing = coilForm.querySelector('input[name="packing"]').value;

    let coilPrice = Math.round(copper * copperPrice + pvcTotal) + parseFloat(labor) + parseFloat(packing);

    const Price = document.createElement("h1");
    Price.innerHTML = `
    Copper: ${copper.toFixed(3)} KG<br />
    PVC: ${pvcWeight.toFixed(3)} KG<br />
    TotalPvc: Rs.${Math.round(pvcTotal)} <br />
    Total: Rs.${coilPrice}
    
    `;
    coilForm.append(Price);
    // Clear the form input
    /*
    coilForm.querySelector('input[name="copperPrice"]').value = "";
    coilForm.querySelector('input[name="pvcPrice"]').value = "";
    coilForm.querySelector('input[name="coilWeight"]').value = "";
    coilForm.querySelector('input[name="size"]').value = "";
    coilForm.querySelector('input[name="wires"]').value = "";
    coilForm.querySelector('input[name="labor"]').value = "";
    coilForm.querySelector('input[name="packing"]').value = "";
*/
});


// Append coilForm to the main
const main = document.querySelector(".maincontent");
main.append(coilForm);