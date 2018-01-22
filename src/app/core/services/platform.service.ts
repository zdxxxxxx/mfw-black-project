import { Injectable } from '@angular/core';
import { LocalStorageService } from './localStorage.service';

const PLATFORM = 'PLATFORM';
const APPS = 'APPS';
export interface Platform {
    /** 当前平台 */
    current: string;
}
export interface Apps {
    // 所有应用
    arr: any[];
}
/**
 * 用于应用启动时
 * 一般用来获取应用所需要的基础数据等
 */
@Injectable()
export class PlatformService {

    private _platform: Platform = null;
    private _apps: Apps = null;

    constructor(private local: LocalStorageService) {
    }

    get platform(): Platform {
        if (!this._platform) {
            this._platform = Object.assign(<Platform>{
                current: 'push'
            }, this.local.get(PLATFORM));
            this.local.set(PLATFORM, this._platform);
        }
        return this._platform;
    }

    setPlatform(name: string, value: any): boolean {
        if (typeof this.platform[name] !== 'undefined') {
            this.platform[name] = value;
            this.local.set(PLATFORM, this._platform);
            return true;
        }
        return false;
    }


    get apps(): Apps {
        if (!this._apps) {
            this._apps = Object.assign(<any>{
                arr: []
            });
        }
        return this._apps;
    }

    setApps(name: string, value: any): boolean {
        if (typeof this.apps[name] !== 'undefined') {
            this.apps[name] = value;
            return true;
        }
        return false;
    }
}
