// Define the array of fruits
let fruits = [
    {
      name: 'Apple',
      image: 'images/apple.jpg',
    },
    {
      name: 'Orange',
      image: 'images/orange.jpg',
    },
    {
      name: 'Banana',
      image: 'images/banana.jpg',
    },
  ];
  
  // Start with the top of the HTML
  let html = `
    <table>
      <thead>
        <tr>
          <th>Fruit</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
  `;
  
  // Iterate the array to create all the rows and append them to the html above one by one. You can even add classes and other attributes!
  for (fruit of fruits) {
    let rowHtml = `
      <tr class="fruit-row">
        <td>${fruit.name}</td>
        <td><img src="${fruit.image}" /></td>
      </tr>
    `;
    html += rowHtml;  
  }
  
  // Finish off the HTML by closing the tbody and table
  html += `
    </tbody>
  </table>
  `;
  
  // Set the document body's innerHTML to the html string above
  
  let bodyDiv = document.getElementsByTagName("div")[0];

  bodyDiv.innerHTML = html;