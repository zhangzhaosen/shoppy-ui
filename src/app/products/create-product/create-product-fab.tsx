'use client'

import AddIcon from "@mui/icons-material/Add"
import { Fab } from "@mui/material"
import CreateProductionModal from "./create-product-modal"
import { useState } from "react"

export default function CreateProductFab() {

  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      <CreateProductionModal
        open={modalVisible}
        handleClose={() => {
          setModalVisible(false)
        }}
      />
      <div className="absolute left-10 bottom-10">
        <Fab color="primary" onClick={() => {
          setModalVisible(true)
        }}>
          <AddIcon />
        </Fab>
      </div>
    </>
  )
}