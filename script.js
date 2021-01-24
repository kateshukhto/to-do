window.addEventListener('DOMContentLoaded', () => {

   const add = document.querySelector('.add'),
         wrapper = document.querySelector('.wrap');

   function createTask() {
      add.addEventListener('click', () => {
         const task = prompt('What do I need to do?');
         
         if(task != null && task.trim() != '') {
            createElem();
            const textTask = document.querySelector('.text');
            textTask.textContent = task;
         } else (
            alert('ERROR')
         );
      });
   }
   createTask();

   function createElem() {
      const div = document.createElement('div');
      div.classList.add('elem');
      wrapper.insertAdjacentElement("afterbegin", div);
      const text = document.createElement('div');
      text.classList.add('text');
      div.insertAdjacentElement('afterbegin', text);
      const close = document.createElement('div');
      close.classList.add('btn');
      div.insertAdjacentElement('afterend', close);
      close.addEventListener('click', () => {
         div.remove();
         close.remove();
      });
   
   }
});
