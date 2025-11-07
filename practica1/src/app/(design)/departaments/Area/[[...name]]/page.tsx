import React from "react";

export default async function page({params}: {params: {name: []}}){  
    const { name } = await params;
    return ( 
        <div>

            <h1 className="text-2x1 font-cdcdbold" >Areas</h1>
            <ul>
                {  
                    name?.map((el,idx) => (<li key={idx}>{el}</li>))
                }

        </ul>
        </div>
     )
}