import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const runtime = 'nodejs';

export const size = {
  width: 512,
  height: 512,
};
export const contentType = 'image/png';

export default async function Icon() {
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
          fontFamily: '"Satoshi Black"',
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
