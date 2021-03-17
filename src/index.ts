import { Serializable, JsonProperty } from 'typescript-json-serializer'

@Serializable()
export class LivingBeing {

    @JsonProperty() id: number;
    constructor(id: number) {
        this.id = id;
        
    }
}