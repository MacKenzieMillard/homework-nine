var MODEL = (function() {
    var _homeContent = `<h1>HOME</h1>
<h4>Welcome HOME!</h4>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
  repudiandae dignissimos laboriosam tenetur ipsum labore quis! Dolor
  illum doloremque esse aliquam, in quaerat voluptatibus doloribus
  possimus tempore veritatis? Quo, beatae?
</p>
<p>
  Culpa, ipsa. Numquam veritatis ipsum quae voluptatem sint deleniti
  laudantium et earum unde sapiente. Error sequi minima accusamus tempora
  ab doloremque, voluptas ullam fugiat velit fugit facere? Facere,
  suscipit ab?
</p>
<p>
  Doloremque, enim repellat! Vero, eaque. Obcaecati, veniam? Vero
  necessitatibus, aperiam accusantium reiciendis maiores eos minus
  dolorum. Error, voluptas quos illo soluta eligendi, non at atque ipsum
  voluptatum rerum quam id.
</p>`;
var _aboutContent = ` <h1>ABOUT</h1>
<h4>Let's Learn ABOUT Us!</h4>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
  reiciendis dolorum esse accusantium, quae totam eaque eveniet odio iusto
  placeat reprehenderit aspernatur quibusdam id a enim voluptate.
  Deleniti, facilis sit!
</p>
<p>
  Nulla, veniam vel est maiores fugiat labore delectus necessitatibus
  molestias quae ipsa, reiciendis quis recusandae nisi eum autem quidem
  dolor nam sunt, esse placeat eius facere assumenda ut. Blanditiis,
  reiciendis?
</p>
<p>
  Fugit natus laudantium pariatur veritatis eveniet repudiandae a non.
  Laborum, perferendis adipisci eligendi iste veniam modi maxime
  necessitatibus repudiandae illo, distinctio nihil sint debitis magnam
  suscipit! Doloremque enim corporis pariatur?
</p>
<p>
  Omnis doloremque esse tenetur reprehenderit fugiat voluptatibus, modi
  aspernatur dolor, hic ad obcaecati rem. Quas iure ex labore, doloremque
  ab exercitationem soluta suscipit minima sapiente, voluptatem
  praesentium, corrupti quidem eos?
</p>`;
var _productsContent = `<h1>PRODUCTS</h1>
<h4>What PRODUCTS are we selling?</h4>
<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nam neque necessitatibus?
</p>
<p>
    Voluptates a fugit hic facilis dolore odit at odio ipsum totam vero!
</p>
<p>
    Quae ipsum perspiciatis aliquid totam fugiat adipisci amet voluptas sapiente, assumenda culpa.
</p>
<p>
    Beatae dolore doloremque temporibus fugiat quis possimus nam perferendis odit cupiditate officiis.
</p>
<p>
    Cumque voluptates ad, veritatis doloremque modi nesciunt beatae amet minima commodi quas?
</p>
<p>
    Veritatis porro eaque aut laboriosam asperiores ea, deserunt rerum voluptatum voluptates accusamus?
</p>
<p>
    Debitis, dolore! Velit totam animi ad incidunt cumque facilis. Cumque, perspiciatis quaerat?
</p>`;
var _contactContent = `<h1>CONTACT</h1>
<h4>Need to CONTACT Us?</h4>
<label for="name">Name: </label>
<input type="text" id="name" />

<label for="email">Email: </label>
<input type="text" id="email" />

<label for="phone">Phone Number: </label>
<input type="text" id="phone" />
`;

var _updateView = function(pageName){
    console.log("Model" + pageName);
    var pageContent = "_" + pageName;
    $("#app").html(eval(pageContent));
}

    return {
        updateView: _updateView,
    }
})();