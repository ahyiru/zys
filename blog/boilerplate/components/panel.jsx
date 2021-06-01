import {components} from '@common';

const {Panel}=components;

const Index=props=><Panel style={{background:'var(--panelBgColor)'}}>{props.children}</Panel>;

export default Index;


