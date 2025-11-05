import mongoose from "mongoose";

const pedidoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },

  data_embalagem: {
    type: String,
    required: false,
  },

  data_retirada: {
    type: String,
    required: true,
  },

  data_entrega: {
    type: String,
    required: true,
  },

  funcionario: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Funcionario",
      required: true,
    },
  ],

  autonomo: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Autonomo",
      required: true,
    },
  ],

  veiculo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Veiculo",
    required: true,
  },

  descricao: {
    type: String,
  },

  status: {
    type: String,
    enum: ["em-andamento", "inativado"],
    default: "em-andamento",
  },
});

const Pedido = mongoose.model("Pedido", pedidoSchema);
export default Pedido;
