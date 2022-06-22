let text =
  "The history of the lands that became the United States began with the arrival of the first people in the Americas around 15,000 BC. Numerous indigenous cultures formed, and many saw transformations in the 16th century away from more densely populated lifestyles and towards reorganized polities elsewhere. The European colonization of the Americas began in the late 15th century, however most colonies in what would later become the United States were settled after 1600. By the 1760s, the thirteen British colonies contained 2.5 million people and weFre established along the Atlantic Coast east of the Appalachian Mountains. After defeating France, the British government imposed a series of taxes, including the Stamp Act of 1765, rejecting the colonists' constitutional argument that new taxes needed their approval. Resistance to these taxes, especially the Boston Tea Party in 1773, led to Parliament issuing punitive laws designed to end self-government. Armed conflict began in Massachusetts in 1775";
let keyWord = "papa";
const sun = 21;
let tarde = false;

function wordMatch(text, keyWord) {
  try {
    console.log("texto", text.search(keyWord));
    if (text.search(keyWord) !== -1) {
      console.log("LA PALABRA CLAVE SE ENCONTRÓ");
      tarde = true;
      console.log("tarde: ", tarde);
    } else {
      console.log("NO SE ENCONTRÓ LA PALABRA CLAVE");
      console.log("tarde: ", tarde);
    }
  } catch (error) {
    console.log("ALGO FALLÓ EN LA FUNCIÓN", error);
  }
}
let buscar = wordMatch(text, keyWord);
console.log("buscar", buscar);
