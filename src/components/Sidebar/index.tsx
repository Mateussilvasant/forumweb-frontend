import React from 'react';
import './index.css';


const SidebarComponent = () =>{
    return (
        <aside className="sidebar">
          <ul>
             <li><button>Meus tópicos</button></li>
             <li><button>Meus comentários</button></li>
          </ul>
        </aside>
    );
};

export default SidebarComponent;