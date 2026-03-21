import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

// 로컬 폰트 파일을 직접 읽기 위해 Node.js 런타임 사용
export const runtime = 'nodejs';

export const size = {
  width: 512,
  height: 512,
};
export const contentType = 'image/png';

export default async function Icon() {
  // 최고 굵기인 Satoshi Black TTF 폰트를 시스템에서 불러옵니다.
  const fontPath = join(process.cwd(), 'public/fonts/Satoshi-Black.ttf');
  const fontData = await readFile(fontPath);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#eaf4f4',
          borderRadius: '50%',
          color: '#f27f5b',
          fontSize: 270,
          fontFamily: '"Satoshi Black"', // 커스텀 웹폰트 적용
          letterSpacing: '-8px',
          paddingLeft: '5px',
        }}
      >
        JH
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Satoshi Black',
          data: fontData,
          style: 'normal',
        },
      ],
    }
  );
}
