import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div style="background: #ccc">
      home Page works!
      <lib-dialcode></lib-dialcode>
      <lib-user-list>
      <!--<sunbird-epub-player epub [playerConfig]="epubPlayerConfig"></sunbird-epub-player>-->
      <!--<my-print epub [message]="'Hello world!'"></my-print>-->
      <p pdf>Inside userlist pdf</p>
      </lib-user-list>
      </div>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  epubPlayerConfig = {
    context: {
      mode: 'play',
      authToken: '',
      sid: '7283cf2e-d215-9944-b0c5-269489c6fa56',
      did: '3c0a3724311fe944dec5df559cc4e006',
      uid: 'anonymous',
      channel: '505c7c48ac6dc1edc9b08f21db5a571d',
      pdata: { id: 'prod.diksha.portal', ver: '3.2.12', pid: 'sunbird-portal.contentplayer' },
      contextRollup: { l1: '505c7c48ac6dc1edc9b08f21db5a571d' },
      tags: [
        ''
      ],
      cdata: [],
      timeDiff: 0,
      objectRollup: {},
      host: '',
      endpoint: '',
      userData: {
        firstName: 'Vivek',
        lastName: 'Kasture'
      },
    },
    config: {
      traceId: '123456',
      sideMenu: {
        showShare: true,
        showDownload: true,
        showReplay: false,
        showExit: false,
      }
    },
    metadata: {
      "copyright": "Kendriya_Vidyalaya,2020",
      "keywords": [
        "epub"
      ],
      "subject": [
        "Hindi"
      ],
      "channel": "diksha",
      "language": [
        "English"
      ],
      "mimeType": "application/epub",
      "objectType": "Content",
      "gradeLevel": [
        "Class 10"
      ],
      "appIcon": "https://obj.stage.sunbirded.org/sunbird-content-staging/content/do_21310353834960486414688/artifact/content.thumb.thumb.thumb.jpg",
      "primaryCategory": "Teacher Resource",
      "artifactUrl": "https://obj.stage.sunbirded.org/sunbird-content-staging/content/do_21310353834960486414688/artifact/index.epub",
      "contentType": "LearningOutcomeDefinition",
      "identifier": "do_21310353834960486414688",
      "audience": [
        "Teacher"
      ],
      "visibility": "Default",
      "mediaType": "content",
      "osId": "org.ekstep.quiz.app",
      "languageCode": [
        "en"
      ],
      "license": "CC BY 4.0",
      "name": "EPUB_226.epub",
      "attributions": [
        "kanmani"
      ],
      "status": "Live",
      "code": "8f93a8aa-ae23-f77e-e381-852e58c3175d",
      "description": "epub",
      "streamingUrl": "https://obj.stage.sunbirded.org/sunbird-content-staging/content/do_21310353834960486414688/artifact/index.epub",
      "medium": [
        "English"
      ],
      "createdOn": "2020-09-08T08:17:01.194+0000",
      "additionalCategories": [
        "Learning Outcome Definition"
      ],
      "lastUpdatedOn": "2022-12-14T14:35:29.745+0000",
      "originData": {
        "identifier": "do_21310017032500838411747",
        "repository": "https://dock.preprod.ntp.net.in/api/content/v1/read/do_21310017032500838411747"
      },
      "creator": "kanmani1",
      "pkgVersion": 2,
      "versionKey": "1599553036915",
      "framework": "ekstep_ncert_k-12",
      "createdBy": "95f436bd-aad2-498c-b982-c941ef44a06c",
      "board": "CBSE",
      "resourceType": "Learn",
      "orgDetails": {},
      "licenseDetails": {
        "name": "CC BY 4.0",
        "url": "https://creativecommons.org/licenses/by/4.0/legalcode",
        "description": "For details see below:"
      }
    },
    data: {}
  };
  constructor() { }

  ngOnInit(): void {
  }

}
