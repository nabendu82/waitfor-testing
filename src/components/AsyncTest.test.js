import { render, screen, waitFor } from '@testing-library/react'
import AsyncTest from './AsyncTest'

describe('should pass with correct case', () => {
    it('should make user Uppercase', async () => {
        render(<AsyncTest name="bobby" />)
        await waitFor(() => {
            expect(screen.getByText('BOBBY')).not.toBeNull()
        })
    })
})