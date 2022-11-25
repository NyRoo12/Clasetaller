import Head from "next/head";
import Link from "next/link";


const Layout = ({ children}) => {
  
  return (
    <div className="main" >
      <Head>
        
      </Head>
      
        <Link href="/page1">
          <a
            
            
          >
            hola
          </a>
        </Link>

        <Link href="/page2">
          <a
          
          >
            hola
          </a>
        </Link>

        <Link href="/page3">
          <a
            
          >
            hola
          </a>
        </Link>

        <Link href="/pageList">
          <a
          
          >
            hola
          </a>
        </Link>
        <Link href="/linea1">
          <a
            
          >
            Linea 1
          </a>
        </Link>
        
      
      <main>{children}</main>
    </div>
  );
};
export default Layout;
