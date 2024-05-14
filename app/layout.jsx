import '@styles/globals.css'; // to import the styles 
import { Children } from 'react';
import Nav from '@components/Nav';
import Provider from '@components/Provider';
// to import the meta data
export const metaData  = {
    title:"ai_prompt",
    describtion : " Discover and share AI Prompts"

}

const RootLayout = ({children}) => {
  return (<html lang="en">
    <body>
      <Provider>
        <div className="main">
            <div className="gradiant"/>
        </div>
        <main className="app">  
        <Nav />
        {children}
        </main>
        </Provider>
    </body>

  </html>
  )
}

export default RootLayout;