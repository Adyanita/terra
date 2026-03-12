import Link from "next/link";
import styles from "./size-guide.module.css";

export default function SizeGuidePage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1>Size Guide</h1>
        <p>
          Find your perfect fit with our detailed size guide. Measurements are
          in inches and may vary slightly.
        </p>

        <section className={styles.section}>
          <h2>Tops & Hoodies</h2>
          <div className={styles.tableContainer}>
            <table className={styles.sizeTable}>
              <thead>
                <tr>
                  <th>Size</th>
                  <th>Chest</th>
                  <th>Shoulder</th>
                  <th>Sleeve</th>
                  <th>Length</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>S</td>
                  <td>36-38</td>
                  <td>16</td>
                  <td>24</td>
                  <td>26</td>
                </tr>
                <tr>
                  <td>M</td>
                  <td>38-40</td>
                  <td>17</td>
                  <td>25</td>
                  <td>27</td>
                </tr>
                <tr>
                  <td>L</td>
                  <td>40-42</td>
                  <td>18</td>
                  <td>26</td>
                  <td>28</td>
                </tr>
                <tr>
                  <td>XL</td>
                  <td>42-44</td>
                  <td>19</td>
                  <td>27</td>
                  <td>29</td>
                </tr>
                <tr>
                  <td>XXL</td>
                  <td>44-46</td>
                  <td>20</td>
                  <td>28</td>
                  <td>30</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Bottoms & Pants</h2>
          <div className={styles.tableContainer}>
            <table className={styles.sizeTable}>
              <thead>
                <tr>
                  <th>Size</th>
                  <th>Waist</th>
                  <th>Hip</th>
                  <th>Inseam</th>
                  <th>Outseam</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>28</td>
                  <td>28</td>
                  <td>36</td>
                  <td>30</td>
                  <td>40</td>
                </tr>
                <tr>
                  <td>30</td>
                  <td>30</td>
                  <td>38</td>
                  <td>31</td>
                  <td>41</td>
                </tr>
                <tr>
                  <td>32</td>
                  <td>32</td>
                  <td>40</td>
                  <td>32</td>
                  <td>42</td>
                </tr>
                <tr>
                  <td>34</td>
                  <td>34</td>
                  <td>42</td>
                  <td>33</td>
                  <td>43</td>
                </tr>
                <tr>
                  <td>36</td>
                  <td>36</td>
                  <td>44</td>
                  <td>34</td>
                  <td>44</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.section}>
          <h2>How to Measure</h2>
          <div className={styles.measureGuide}>
            <div className={styles.measureItem}>
              <h3>Chest</h3>
              <p>
                Measure around the fullest part of your chest, keeping the tape
                horizontal.
              </p>
            </div>
            <div className={styles.measureItem}>
              <h3>Waist</h3>
              <p>
                Measure around your natural waistline, typically the narrowest
                part of your torso.
              </p>
            </div>
            <div className={styles.measureItem}>
              <h3>Hip</h3>
              <p>
                Measure around the widest part of your hips, about 8 inches
                below your waist.
              </p>
            </div>
            <div className={styles.measureItem}>
              <h3>Inseam</h3>
              <p>
                Measure from the crotch seam to the bottom of the leg opening.
              </p>
            </div>
          </div>
        </section>

        <div className={styles.backLink}>
          <Link href="/">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
