import React from "react";

function SidebarOption({Icon,title}){
    return(
        <div className="flex cursor-pointer items-center h-10 text-gray-500 ease-in duration-200 hover:text-white">
            {Icon && <Icon className="mr-2.5" />}
            {Icon ? <h4>{title}</h4> : <p className="mt-10 ml-20" > {title}</p> }
        </div>
    )
}

export default SidebarOption;