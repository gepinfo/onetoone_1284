import { SystemEntryService } from '../config/SystemEntryService';

export class SefServices {

    public async GpSEF(UserFeatureId) {
        let sefscreen = {
            user: '',
        }
        await fetch(`${SystemEntryService.apiGatewayURL}/web/getuser/${UserFeatureId}`)
            .then(res => res.json().then(data => ({data})))
            .then( async(obj) => 
                sefscreen.user = obj.data
            );
        return sefscreen;
    }
}