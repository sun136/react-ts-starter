import request from '@/utils/request';

import { Payload } from './types';

const mockBaseUrl =
  '/direct-mock/http/e505175c8c3c6558ff8494c7ae85f8c920cb07ad520c481a395df7cc21bffc5c6e672ca9ed8fad752d3d15cf001a49160973e4c21bdd5902bd41352df68733a1c9382095b091459384b8b489f0565ce5';

export function getUserInfo() {
  return request.get<Payload<API.User>>(`${mockBaseUrl}/api/v1/user/info`);
}
