import { http } from '@/http'

export const token = function(options) {
    return http('/auth/token', 'post', options);
}