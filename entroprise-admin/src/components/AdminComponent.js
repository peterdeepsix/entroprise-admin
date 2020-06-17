import React from "react"

import { Admin, Resource } from "react-admin"
import CustomLoginPage from "./CustomLoginPage"

import {
  SentenceList,
  SentenceShow,
  SentenceCreate,
  SentenceEdit,
} from "./sentences"

import { ItemList, ItemShow, ItemCreate, ItemEdit } from "../components/items"

import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
} from "react-admin-firebase"

import CommentOutlinedIcon from "@material-ui/icons/CommentOutlined"
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined"

import customTheme from "../components/theme"

const config = {
  apiKey: "AIzaSyBWp-Akak-fGxdpjaUvInSOCpMck_16SAA",
  authDomain: "entroprise-production.firebaseapp.com",
  databaseURL: "https://entroprise-production.firebaseio.com",
  projectId: "entroprise-production",
  storageBucket: "entroprise-production.appspot.com",
  messagingSenderId: "22266004444",
  appId: "1:22266004444:web:3219338e78c23d1e370519",
  measurementId: "G-R5YR48J1QY",
}

const options = {
  logging: true,
  rootRef: "root_collection/root_document",
}

const dataProvider = FirebaseDataProvider(config, options)
const authProvider = FirebaseAuthProvider(config, options)

const AdminComponent = () => (
  <Admin
    theme={customTheme}
    loginPage={CustomLoginPage}
    dataProvider={dataProvider}
    authProvider={authProvider}
  >
    <Resource
      name="items"
      icon={FeaturedPlayListOutlinedIcon}
      list={ItemList}
      show={ItemShow}
      create={ItemCreate}
      edit={ItemEdit}
    />
    <Resource
      name="sentences"
      icon={CommentOutlinedIcon}
      list={SentenceList}
      show={SentenceShow}
      create={SentenceCreate}
      edit={SentenceEdit}
    />
  </Admin>
)

export default AdminComponent
