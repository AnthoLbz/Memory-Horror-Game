import React from 'react'
import { List } from 'semantic-ui-react'
import './footer.css'



const Footer = () => (
    <footer>
        <div id='listFooter'>
        <List link horizontal >
            <List.Item as='a' id='wordList1'>Home</List.Item>
            <List.Item as='a' id='wordList'>Products</List.Item>
            <List.Item as='a' id='wordList'>Company</List.Item>
            <List.Item as='a' id='wordList'>Blog</List.Item>
        </List>
        </div>
    </footer>
)

export default Footer