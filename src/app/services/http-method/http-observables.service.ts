import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpObservablesService {

  constructor(private httpClient: HttpClient) { }

  private accessToken: any = localStorage.getItem('accessToken') ? localStorage.getItem('accessToken') : null;
  private headers: any = {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Headers': "Content-Type, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version, X-File-Name",
    "Access-Control-Allow-Credentials": "true",
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST,GET,PUT,PATCH,DELETE,OPTIONS',
  };

  async postUrl(requestURL: any, body: any) {

    console.log('accessToken: ', this.accessToken);

    if (this.accessToken) {
      this.headers['Authorization'] = 'Basic ' + this.accessToken;
    }

    return await this.httpClient.post(requestURL, body, this.headers).pipe(
      tap( // Log the result or error
        data => console.log(data),
        error => console.log(error)
      )).toPromise().then(
        data => {
          // console.log("Request is successful ", data);
          return data;
        },
        error => {
          // console.log("Error", error);
          // this.handleErrors(error);
          // return { error: [{ message: APP_CONST.SERVER_ERROR }] };
          return error;
        }
      );
  }

  async puttUrl(requestURL: any, body: any) {

    console.log('accessToken: ', this.accessToken);

    if (this.accessToken) {
      this.headers['Authorization'] = 'Basic ' + this.accessToken;
    }

    return await this.httpClient.put(requestURL, body, this.headers).pipe(
      tap( // Log the result or error
        data => console.log(data),
        error => console.log(error)
      )).toPromise().then(
        data => {
          // console.log("Request is successful ", data);
          return data;
        },
        error => {
          // console.log("Error", error);
          // this.handleErrors(error);
          // return { error: [{ message: APP_CONST.SERVER_ERROR }] };
          return error;
        }
      );
  }


  async getUrl(requestURL: any) {

    console.log('accessToken: ', this.accessToken);

    if (this.accessToken) {
      this.headers['Authorization'] = 'Basic ' + this.accessToken;
    }

    return await this.httpClient.get(requestURL, this.headers).pipe(
      tap( // Log the result or error
        data => console.log(data),
        error => console.log(error)
      )).toPromise().then(
        data => {
          // console.log("Request is successful ", data);
          return data;
        },
        error => {
          // console.log("Error", error);
          // this.handleErrors(error);
          // return { error: [{ message: APP_CONST.SERVER_ERROR }] };
          return error;
        }
      );
  }

  async deleteUrl(requestURL: any) {

    console.log('accessToken: ', this.accessToken);

    if (this.accessToken) {
      this.headers['Authorization'] = 'Basic ' + this.accessToken;
    }

    return await this.httpClient.delete(requestURL, this.headers).pipe(
      tap( // Log the result or error
        data => console.log(data),
        error => console.log(error)
      )).toPromise().then(
        data => {
          // console.log("Request is successful ", data);
          return data;
        },
        error => {
          // console.log("Error", error);
          // this.handleErrors(error);
          // return { error: [{ message: APP_CONST.SERVER_ERROR }] };
          return error;
        }
      );
  }

  // handleErrors(error: any) {
  //   if (error.status == '401') {
  //     const dialogRef = this.dialog.open(DialogMessageComponent, {
  //       // width: '50%',
  //       position: {
  //         top: "200px"
  //       },
  //       data: {
  //         msg: [{ fieldName: '', message: this.translation.translate('yourAccessTokenExpiredInvalid') }],
  //         type: 'error',
  //         class: 'wider'
  //       },
  //     });
  //     dialogRef.afterClosed().subscribe(async (result) => {
  //       this.generalService.redirectToLogin();
  //       /* if (result === 'continue') {
  //       } */
  //     });
  //   }
  // }
  ////////////////////////////////////////////////////////////////////////////
  /* async postMethod(url: string, body: any, params: any) {
    return await this.httpClient.post(url, body, { params: params, responseType: 'text' as 'json' }).pipe(
      tap( // Log the result or error
        data => console.log(data),
        error => console.log(error)
      )).toPromise().then(
        data => {
          // console.log("Request is successful ", data);
          return data;
        },
        error => {
          // console.log("Error", error);
          return { error: [{ message: APP_CONST.SERVER_ERROR }] };
        }
      );
  } */

  /* async putMethod(url: string, body: any, params: any) {
    return await this.httpClient.put(url, body, { params: params, responseType: 'text' as 'json' }).pipe(
      tap( // Log the result or error
        data => console.log(data),
        error => console.log(error)
      )).toPromise().then(
        data => {
          // console.log("Request is successful ", data);
          return data;
        },
        error => {
          // console.log("Error", error);
          return { error: [{ message: APP_CONST.SERVER_ERROR }] };
        }
      );
  } */

  /* async deleteMethod(url: string, params: any) {
    return await this.httpClient.delete(url, { params: params, responseType: 'text' as 'json' }).pipe(
      tap( // Log the result or error
        data => console.log(data),
        error => console.log(error)
      )).toPromise().then(
        data => {
          // console.log("Request is successful ", data);
          return data;
        },
        error => {
          // console.log("Error", error);
          return { error: [{ message: APP_CONST.SERVER_ERROR }] };
        }
      ).then(
        data => {
          // console.log("Request is successful ", data);
          return data;
        },
        error => {
          // console.log("Error", error);
          return { error: [{ message: APP_CONST.SERVER_ERROR }] };
        }
      );
  } */
}
