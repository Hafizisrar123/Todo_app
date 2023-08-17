class Book{
    constructor(title,auther,isbn){
        this.title=title;
        this.auther=auther;
        this.isbn=isbn;
    }
}
class UI{
    addbooktolist(book){
        const list=document.getElementById('book-list');
        const row=document.createElement('tr');
        row.innerHTML=`
        <td>${book.title} </td>
        <td>${book.auther} </td>
        <td>${book.isbn} </td>
        <td><a href="" class="delete">X</a></td>
        `;
        list.appendChild(row);
    }
    showalert(message,className){
        const div=document.createElement('div');
        div.className=`alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const form=document.querySelector('#book-form');
        const container=document.querySelector('.container');
        form.insertAdjacentElement("beforeBegin",div);

        setTimeout(function(){
            document.querySelector('.alert').remove();
        },3000);
        
    }

    deletebook(target){
        if(target.className==='delete'){
            target.parentElement.parentElement.remove();
        }
    }

    clearfields(){
        console.log("hello");
        document.getElementById('title').value='';
        document.getElementById('auther').value='';
        document.getElementById('isbn').value='';
    }
}


document.getElementById("book-form").addEventListener('submit',function(e){
    e.preventDefault();
   const title=document.getElementById('title').value;
   const auther=document.getElementById('auther').value;
   const isbn=document.getElementById('isbn').value;
   const book=new Book(title,auther,isbn);
   const ui=new UI();
   if(title===''||auther===''||isbn===''){
    ui.showalert('please fill all fields','error');
   }else{
    ui.addbooktolist(book);
    ui.showalert('book added','success');
    ui.clearfields();
   }
   
});

document.getElementById("book-list").addEventListener('click',function(e){
    const ui=new UI();
    ui.deletebook(e.target);
    ui.showalert('book removed','success');
    ui.preventDefault();

    
});
// var bodyE=document.querySelector('body');

// var isyellow= false;
// setInterval(function(){
//   if(isyellow){
//     bodyE.style.background='white';
//   }else{
//     bodyE.style.background='yellow';
//   }
//   isyellow=!isyellow;
// },1000);