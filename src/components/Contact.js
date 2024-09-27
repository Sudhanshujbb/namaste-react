const Contact = ()=>{
    return(
        <div className="flex flex-col items-center">
            <h1 className="p-4 m-4">Contact Us</h1>
            <input placeholder="Name" className="p-2 m-4 border border-black" />
            <textarea placeholder="Enter your message here" className="p-2 m-4 border border-black"/>
            <button className="p-2 m-4 border border-black bg-slate-300 rounded-lg">Submit</button>
        </div>
    );
}

export default Contact;