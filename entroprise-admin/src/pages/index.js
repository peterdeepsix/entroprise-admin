import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Admin, Resource } from "react-admin"
import CustomLoginPage from "../components/CustomLoginPage"

import {
  SentenceList,
  SentenceShow,
  SentenceCreate,
  SentenceEdit,
} from "../components/sentences"

import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
} from "react-admin-firebase"

// import { firebaseConfig as config } from "../configs/FIREBASE_CONFIG"

import CommentOutlinedIcon from "@material-ui/icons/CommentOutlined"

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
  rootRef: "root/items",
}

const dataProvider = FirebaseDataProvider(config, options)
const authProvider = FirebaseAuthProvider(config, options)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Admin
      loginPage={CustomLoginPage}
      dataProvider={dataProvider}
      authProvider={authProvider}
    >
      <Resource
        name="sentences"
        icon={CommentOutlinedIcon}
        list={SentenceList}
        show={SentenceShow}
        create={SentenceCreate}
        edit={SentenceEdit}
      />
    </Admin>
  </Layout>
)

export default IndexPage
