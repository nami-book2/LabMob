import ap from "../../api"
import { ITopico } from "../../../interfaces/Topico.interface"
import api from "../../api"

class TopicoData {
    index() {
        return api.get<ITopico>('/topico')
    }
}
export default new TopicoData();