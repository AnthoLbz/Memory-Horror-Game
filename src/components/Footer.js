import React from 'react'
import { List } from 'semantic-ui-react'
import './footer.css'



const Footer = () => (
    <footer>
        <div id='listFooter'>
        <List link horizontal >
            <List.Item as='a'>Home</List.Item>
            <List.Item as='a'>Products</List.Item>
            <List.Item as='a'>Company</List.Item>
            <List.Item as='a'>Blog</List.Item>
        </List>
        </div>
    </footer>
)

export default Footer