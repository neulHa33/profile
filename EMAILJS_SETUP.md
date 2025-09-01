# EmailJS 설정 가이드 📧

## 1. EmailJS 계정 생성
1. [EmailJS 웹사이트](https://www.emailjs.com/)에 접속
2. 무료 계정으로 가입 (월 200통까지 무료)

## 2. 이메일 서비스 설정
1. **Email Services** → **Add New Service** 클릭
2. **Gmail** 또는 **Outlook** 선택
3. 이메일 계정으로 로그인하여 인증

## 3. 이메일 템플릿 생성
1. **Email Templates** → **Create New Template** 클릭
2. 템플릿 내용 작성:

```html
새로운 연락 메시지가 도착했습니다!

이름: {{name}}
이메일: {{email}}
메시지: {{message}}

보낸 시간: {{sent_date}}
```

3. **Save** 클릭

## 4. 코드에 설정 적용
`src/pages/Contact.tsx` 파일에서 다음 값들을 실제 값으로 변경:

```typescript
const result = await emailjs.sendForm(
  'YOUR_SERVICE_ID',     // Email Services에서 확인
  'YOUR_TEMPLATE_ID',    // Email Templates에서 확인  
  formRef.current!,
  'YOUR_PUBLIC_KEY'      // Account → API Keys에서 확인
);
```

## 5. 설정 값 찾는 방법
- **Service ID**: Email Services → 해당 서비스 클릭 → Service ID 복사
- **Template ID**: Email Templates → 해당 템플릿 클릭 → Template ID 복사  
- **Public Key**: Account → API Keys → Public Key 복사

## 6. 테스트
1. 개발 서버 실행: `npm run dev`
2. Contact 페이지에서 폼 작성 후 전송
3. 설정한 이메일로 메시지 도착 확인

## 주의사항 ⚠️
- 무료 플랜은 월 200통 제한
- 실제 배포 시에는 환경변수로 키 관리 권장
- 스팸 방지를 위해 CAPTCHA 추가 고려

## 대안 방법들 🔄
1. **Formspree**: 더 간단한 폼 처리 서비스
2. **Netlify Forms**: Netlify 배포 시 무료 폼 처리
3. **Google Forms**: 완전 무료이지만 디자인 제한
4. **백엔드 서버**: Node.js + Nodemailer 조합
