for(let i=0;i<localStorage.length;i++){
    console.log(localStorage.key(i));
    let p = localStorage.key(i);
    localStorage.getItem(p);
}

create = () =>{
    let title = document.getElementById("title").value;
    let activity = document.getElementById("activity").value;
    

    localStorage.setItem(title,activity);
    let title_table = document.getElementById("title-table");
    title_table.innerHTML = "";
    let description_table = document.getElementById("description-table");
    description_table.innerHTML = "";

    for(let i=0;i<localStorage.length;i++){
        title_table.innerHTML = title_table.innerHTML + `<p>${localStorage.key(i)}</p>`;
        let k = localStorage.key(i);
        description_table.innerHTML = description_table.innerHTML + `<p>${localStorage.getItem(k)}</p>`;
    }

    document.getElementById("activity").value = "";
    document.getElementById("title").value = ""
}


del = () => {
    localStorage.clear();
    // For deleting Keys
    let par1 = document.getElementById("title-table");
    let child1 = Array.from(par1.getElementsByTagName("p"));
    for(let i=0;i<child1.length;i++){
        par1.removeChild(child1[i]);
    }

    //For Deleting Descriptions
    let par2 = document.getElementById("description-table");
    let child2 = Array.from(par2.getElementsByTagName("p"));
    for(let i=0;i<child2.length;i++){
        par2.removeChild(child2[i]);
    }
}

del_one = () => {
     let de = prompt("Enter the title of the task which you want to delete");

     for(let i=0;i<localStorage.length;i++){
        if(de == localStorage.key(i)){
            let k = localStorage.key(i);
            localStorage.removeItem(k);
        }
     }

    let title_table = document.getElementById("title-table");
    title_table.innerHTML = "";
    let description_table = document.getElementById("description-table");
    description_table.innerHTML = "";

    for(let i=0;i<localStorage.length;i++){
        title_table.innerHTML = title_table.innerHTML + `<p>${localStorage.key(i)}</p>`;
        let k = localStorage.key(i);
        description_table.innerHTML = description_table.innerHTML + `<p>${localStorage.getItem(k)}</p>`;
    }
}

update_task = () => {
    let up = prompt("Enter the title of the task which you want to update");
    let des = prompt("Enter the new description");

    for(let i=0;i<localStorage.length;i++){
        if(up == localStorage.key(i)){
            let k = localStorage.key(i);
            localStorage.setItem(k,des);
        }
    }

    let title_table = document.getElementById("title-table");
    title_table.innerHTML = "";
    let description_table = document.getElementById("description-table");
    description_table.innerHTML = "";

    for(let i=0;i<localStorage.length;i++){
        title_table.innerHTML = title_table.innerHTML + `<p>${localStorage.key(i)}</p>`;
        let k = localStorage.key(i);
        description_table.innerHTML = description_table.innerHTML + `<p>${localStorage.getItem(k)}</p>`;
    }

}

prev = () => {
    let title_table = document.getElementById("title-table");
    title_table.innerHTML = "";
    let description_table = document.getElementById("description-table");
    description_table.innerHTML = "";

    for(let i=0;i<localStorage.length;i++){
        title_table.innerHTML = title_table.innerHTML + `<p>${localStorage.key(i)}</p>`;
        let k = localStorage.key(i);
        description_table.innerHTML = description_table.innerHTML + `<p>${localStorage.getItem(k)}</p>`;
    }
}
