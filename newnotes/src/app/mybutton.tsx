import Link from "next/link";

const MyButton: React.FC = () => {
    return (
        <Link href= "/about" className=""> 
            <button>Save</button>
        </Link>
        
    );
};

export default MyButton;

//href = "/about" leads to about directory => page.tsx page there
//export default myButton; if only one function there, if multiple cannot export