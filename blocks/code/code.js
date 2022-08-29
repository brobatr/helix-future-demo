export default function decorate(block) {
  const ul = document.createElement('ul');
  const li = document.createElement('li');
  li.innerHTML = 'test li element';
  console.log(block);
  ul.append(li);

  block.textContent = '';
  block.append(ul);
}
